import React, { useEffect, useState, useMemo, useCallback } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { Text } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Bomb } from "../Bomb";
import Cell from "./Cell";
import RestartButton from "./RestarButton";
import HomeButton from "../Ui/HomeButton";
import Score from "./Score";
const BOARD_SIZE = 81;
const NUM_MINES = 12;
const BOARD_WIDTH = 9;

const calculatePosition = (index) => {
  const x = index % BOARD_WIDTH;
  const z = Math.floor(index / BOARD_WIDTH);
  return [x, 0, z];
};

export default function MinesweeperBoard() {
  const initialCells = useMemo(
    () => Array(BOARD_SIZE).fill({ isOpen: false }),
    []
  );
  const [cells, setCells] = useState(initialCells);
  const [mines, setMines] = useState(Array(BOARD_SIZE).fill(false));
  const [bombFlag, setBombFlag] = useState(Array(BOARD_SIZE).fill(null));
  const [minesAround, setMinesAround] = useState(Array(BOARD_SIZE).fill(0));
  const [gameOver, setGameOver] = useState(false);
  const [flagsPlaced, setFlagsPlaced] = useState(0);
  const [restartButtonColor, setRestartButtonColor] = useState("red");
  const [score, setScore] = useState(+localStorage.getItem("score"));
  const initializeGame = useCallback(() => {
    const shuffledIndexes = Array.from(
      { length: BOARD_SIZE },
      (_, index) => index
    ).sort(() => Math.random() - 0.5);
    const mineIndexes = shuffledIndexes.slice(0, NUM_MINES);
    const newMines = Array(BOARD_SIZE).fill(false);
    mineIndexes.forEach((index) => {
      newMines[index] = true;
    });
    setMines(newMines);
    calculateMinesAround(newMines);
    setCells(initialCells);
    setGameOver(false);
    setBombFlag(Array(BOARD_SIZE).fill(null));
    setFlagsPlaced(12);
    setRestartButtonColor("");
  }, []);

  useEffect(() => {
    initializeGame();
  }, []);

  const remainingClosedCells = cells.filter(
    (cell) => !cell.isOpen && !mines[cell.index]
  );

  useEffect(() => {
    if (remainingClosedCells.length === NUM_MINES && !gameOver) {
      setGameOver(true);
      setRestartButtonColor("green");

      setScore((prev) => {
        const newScore = prev + 10;
        localStorage.setItem("score", newScore.toString());
        console.log("Score + 10: ", newScore);
        return newScore;
      });
    }
  }, [remainingClosedCells]);

  const calculateMinesAround = useCallback((mines) => {
    const newMinesAround = Array(BOARD_SIZE).fill(0);
    mines.forEach((hasMine, index) => {
      const x = index % BOARD_WIDTH;
      const z = Math.floor(index / BOARD_WIDTH);
      const neighbors = [
        index - BOARD_WIDTH - 1,
        index - BOARD_WIDTH,
        index - BOARD_WIDTH + 1,
        index - 1,
        index + 1,
        index + BOARD_WIDTH - 1,
        index + BOARD_WIDTH,
        index + BOARD_WIDTH + 1,
      ];

      neighbors.forEach((neighbor) => {
        const neighborX = neighbor % BOARD_WIDTH;
        const neighborZ = Math.floor(neighbor / BOARD_WIDTH);
        const isValidNeighbor =
          neighbor >= 0 &&
          neighbor < BOARD_SIZE &&
          Math.abs(x - neighborX) <= 1 &&
          Math.abs(z - neighborZ) <= 1;

        if (isValidNeighbor && mines[neighbor]) {
          newMinesAround[index]++;
        }
      });
    });
    setMinesAround(newMinesAround);
  }, []);
  const openAdjacentCells = (index) => {
    const stack = [index];
    const visited = new Set();

    while (stack.length) {
      const currentIndex = stack.pop();
      visited.add(currentIndex);

      const x = currentIndex % BOARD_WIDTH;
      const z = Math.floor(currentIndex / BOARD_WIDTH);

      const neighbors = [
        currentIndex - BOARD_WIDTH,
        currentIndex + BOARD_WIDTH,
        currentIndex - 1,
        currentIndex + 1,
      ].filter((neighbor) => {
        const neighborX = neighbor % BOARD_WIDTH;
        const neighborZ = Math.floor(neighbor / BOARD_WIDTH);
        return (
          neighbor >= 0 &&
          neighbor < BOARD_SIZE &&
          neighborX >= 0 &&
          neighborX < BOARD_WIDTH &&
          neighborZ >= 0 &&
          neighborZ < BOARD_WIDTH &&
          Math.abs(x - neighborX) + Math.abs(z - neighborZ) === 1
        );
      });

      neighbors.forEach((neighbor) => {
        const isValidNeighbor =
          !visited.has(neighbor) &&
          !mines[neighbor] &&
          (minesAround[neighbor] === 0 || minesAround[neighbor] === undefined);

        if (isValidNeighbor) {
          stack.push(neighbor);
        } else if (minesAround[neighbor] > 0 && !mines[neighbor]) {
          visited.add(neighbor);
        }
      });
    }

    setCells((prevCells) =>
      prevCells.map((cell, i) =>
        visited.has(i) ? { ...cell, isOpen: true } : cell
      )
    );
  };
  const handleCellClick = useCallback(
    (index) => {
      const cell = cells[index];
      // Проверяем, что ячейка еще не открыта и игра не окончена
      if (!cell.isOpen && !gameOver) {
        if (mines[index]) {
          setGameOver(true); // Устанавливаем состояние проигрыша
          setRestartButtonColor("red");
          if (score >= 10) {
            setScore((prev) => {
              const newScore = prev - 10 >= 0 ? prev - 10 : 0;
              localStorage.setItem("score", newScore.toString());
              console.log("Score - 10: ", newScore);
              return newScore;
            });
          }

          // Открываем все ячейки с минами
          const newCells = cells.map((cell, i) => ({
            ...cell,
            isOpen: mines[i],
          }));
          setCells(newCells);
        } else if (minesAround[index] > 0) {
          // Если ячейка с цифрой, открываем только её
          setCells((prevCells) =>
            prevCells.map((prevCell, i) =>
              i === index ? { ...prevCell, isOpen: true } : prevCell
            )
          );
        } else {
          openAdjacentCells(index);
          // Продолжаем игру
        }
      }
    },
    [cells, gameOver, mines, minesAround, openAdjacentCells]
  );
  const handleRightClick = (index) => {
    if (!cells[index].isOpen && !gameOver) {
      setBombFlag((prevFlags) =>
        prevFlags.map((prevFlag, i) => (i === index ? !prevFlag : prevFlag))
      );
      setFlagsPlaced((prevFlags) =>
        bombFlag[index] ? prevFlags + 1 : prevFlags - 1
      );
    }
  };

  return (
    <>
      {gameOver && (
        <RestartButton
          onClick={initializeGame}
          restartButtonColor={restartButtonColor}
        />
      )}

      <Text position={[1.2, 2.35, -2]} scale={0.5} color="#007aa5" fontSize={1}>
        Bombs left: {flagsPlaced}
      </Text>
      <Score score={score} />
      {cells.map((cell, index) => {
        const x = index % BOARD_WIDTH;
        const z = Math.floor(index / BOARD_WIDTH);
        const position = [x, 0, z];

        return (
          <group
            key={index}
            rotation={[degToRad(90), 0, 0]}
            position={[-0.2, 2, -2.1]}
            scale={0.35}
          >
            {bombFlag.map(
              (flag, index) =>
                flag && (
                  <mesh
                    key={`flag-${index}`}
                    position={calculatePosition(index)}
                  >
                    <Bomb />
                  </mesh>
                )
            )}
            <Cell
              position={position}
              isOpen={cell.isOpen}
              onClick={() => handleCellClick(index)}
              onRightClick={() => handleRightClick(index)}
              minesAround={minesAround[index]}
              mines={mines[index]}
              gameOver={gameOver}
            />
            {mines[index] && (
              <mesh position={position}>
                <boxGeometry args={[0.8, 0.05, 0.8]} />
                <meshStandardMaterial color="red" />
              </mesh>
            )}
            <mesh position={[4, -0.05, 4]}>
              <boxGeometry args={[9, 0.1, 9]} />
              <meshStandardMaterial color="white" />
            </mesh>
            <motion.group
              position={[4, 0, 9.5]}
              rotation-x={0.2}
              scale={0.5}
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.9 }}
            >
              <HomeButton />
            </motion.group>
          </group>
        );
      })}
    </>
  );
}
