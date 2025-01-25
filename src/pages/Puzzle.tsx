import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState, useEffect } from 'react';
import { PuzzlePiece } from '@/components/puzzle/PuzzlePiece';
import { PuzzleGrid } from '@/components/puzzle/PuzzleGrid';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Puzzle() {
  const [placedPieces, setPlacedPieces] = useState<{
    [key: string]: { x: number; y: number };
  }>({});
  const [shuffledPieces, setShuffledPieces] = useState<number[]>([]);

  // Function to shuffle array using Fisher-Yates algorithm
  const shuffleArray = (array: number[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Reset and shuffle pieces on component mount
  useEffect(() => {
    const pieces = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    setShuffledPieces(shuffleArray(pieces));
    setPlacedPieces({});
  }, []);

  const handlePiecePlaced = (pieceId: string, x: number, y: number) => {
    setPlacedPieces(prev => ({
      ...prev,
      [pieceId]: { x, y }
    }));
    toast("Piece placed!");
  };

  const handleReset = () => {
    setPlacedPieces({});
    setShuffledPieces(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    toast("Puzzle reset!");
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-white">Puzzle Time!</h1>
            <Button 
              variant="secondary" 
              onClick={handleReset}
              className="bg-white/20 hover:bg-white/30 text-white"
            >
              Reset Puzzle
            </Button>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <PuzzleGrid onPiecePlaced={handlePiecePlaced} placedPieces={placedPieces} />
            </div>
            
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm w-full">
              <h2 className="text-xl font-semibold text-white mb-2">Pieces</h2>
              <div className="grid grid-cols-3 gap-0 justify-items-center">
                {shuffledPieces.map((pieceNumber) => (
                  !placedPieces[`Piece ${pieceNumber}`] && (
                    <PuzzlePiece
                      key={pieceNumber}
                      id={`Piece ${pieceNumber}`}
                      initialSize="small"
                      pieceNumber={pieceNumber}
                    />
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}