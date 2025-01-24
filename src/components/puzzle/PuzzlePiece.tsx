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
    // Create a mapping of piece numbers to their actual positions
    const imageMapping: { [key: string]: string } = {
      '1': '/lovable-uploads/ab684a84-2369-4a5a-94aa-c7ad974a57d5.png', // Original piece 2
      '2': '/lovable-uploads/71eb8d54-dfa7-4b55-83fe-bd8a8f00df4e.png', // Original piece 3
      '3': '/lovable-uploads/59575ba7-1a5e-454f-a849-9e942e8b9ce6.png', // Original piece 1
      '4': '/lovable-uploads/2bb51a96-d0c1-471e-ad22-02495638dc48.png', // Original piece 5
      '5': '/lovable-uploads/5e5e478c-0365-477d-9956-32539abc0815.png', // Original piece 4
      '6': '/lovable-uploads/d08f0ce6-0963-40f1-873e-3e2b4879817b.png', // New piece 6
      '7': '/lovable-uploads/9676ea56-3810-4e87-adac-ff22942626c8.png', // New piece 7
      '8': '/lovable-uploads/931af360-019c-4de1-b058-20570acc8883.png', // New piece 8
      '9': '/Piece9.png'
    };

    return imageMapping[number] || `/Piece${number}.png`; // Fallback for pieces without uploaded images
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