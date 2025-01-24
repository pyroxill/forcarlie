import { useDrag } from 'react-dnd';
import { cn } from '@/lib/utils';

interface PuzzlePieceProps {
  id: string;
  initialSize?: 'small' | 'large';
  position?: { x: number; y: number };
}

export function PuzzlePiece({ id, initialSize = 'small', position }: PuzzlePieceProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'puzzle-piece',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  // Extract the piece number from the id (e.g., "Piece 1" -> "1")
  const pieceNumber = id.split(' ')[1];

  // Add console.log to debug image path
  console.log(`Loading image from: /lovable-uploads/Piece${pieceNumber}.png`);

  return (
    <div
      ref={drag}
      className={cn(
        'cursor-move transition-all duration-300',
        initialSize === 'small' ? 'w-24 h-24' : 'w-32 h-32',
        isDragging ? 'opacity-50' : 'opacity-100',
        position ? 'absolute' : 'relative'
      )}
      style={position ? {
        left: position.x,
        top: position.y,
      } : undefined}
    >
      <img
        src={`/lovable-uploads/Piece${pieceNumber}.png`}
        alt={`Puzzle piece ${pieceNumber}`}
        className="w-full h-full object-contain"
        draggable={false}
        onError={(e) => console.error('Image failed to load:', e)}
      />
    </div>
  );
}