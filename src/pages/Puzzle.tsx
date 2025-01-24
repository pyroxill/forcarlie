import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from 'react';
import { PuzzlePiece } from '@/components/puzzle/PuzzlePiece';
import { PuzzleGrid } from '@/components/puzzle/PuzzleGrid';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Puzzle() {
  const [placedPieces, setPlacedPieces] = useState<{
    [key: string]: { x: number; y: number };
  }>({});

  const handlePiecePlaced = (pieceId: string, x: number, y: number) => {
    setPlacedPieces(prev => ({
      ...prev,
      [pieceId]: { x, y }
    }));
    toast("Piece placed!");
  };

  const handleReset = () => {
    setPlacedPieces({});
    toast("Puzzle reset!");
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto space-y-8">
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
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white mb-4">Pieces</h2>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((piece) => (
                  !placedPieces[`Piece ${piece}`] && (
                    <PuzzlePiece
                      key={piece}
                      id={`Piece ${piece}`}
                      initialSize="small"
                    />
                  )
                ))}
              </div>
            </div>
            
            <div className="flex-1">
              <PuzzleGrid onPiecePlaced={handlePiecePlaced} placedPieces={placedPieces} />
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}