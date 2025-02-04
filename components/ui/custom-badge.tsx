import { Badge } from "./badge";

export default function CustomBadge({ className, discount }: { className?: string, discount: number | undefined }) {
    return (
        <Badge className={`bg-purple-700 w-20 flex justify-center ${className}`}>-{discount}%</Badge>
    )
}