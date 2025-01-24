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
  
  // Use the correct image path based on the piece number
  const getImagePath = (number: string) => {
    if (number === '1') {
      return '/lovable-uploads/59575ba7-1a5e-454f-a849-9e942e8b9ce6.png';
    }
    if (number === '2') {
      return '/lovable-uploads/ab684a84-2369-4a5a-94aa-c7ad974a57d5.png';
    }
    if (number === '3') {
      return '/lovable-uploads/71eb8d54-dfa7-4b55-83fe-bd8a8f00df4e.png';
    }
    if (number === '4') {
      return '/lovable-uploads/5e5e478c-0365-477d-9956-32539abc0815.png';
    }
    return `/Piece${number}.png`; // Fallback for other pieces until they're uploaded
  };

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
        src={getImagePath(pieceNumber)}
        alt={`Puzzle piece ${pieceNumber}`}
        className="w-full h-full object-contain"
        draggable={false}
        onError={(e) => {
          console.error('Image failed to load:', e);
          console.log('Attempted to load:', getImagePath(pieceNumber));
        }}
      />
    </div>
  );
}