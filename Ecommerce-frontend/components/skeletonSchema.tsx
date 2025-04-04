import { Skeleton } from "./ui/skeleton";

type SkeletonSchemaProps = {
    grid: number;
}


const skeletonSchema = (props: SkeletonSchemaProps) => {

    const { grid } = props;
    return (
        Array.from({ length: grid }).map((_, index) => (
            <div key={index} className="flex flex-col gap-8 space-y-3 mx-auto">
                <Skeleton className="h-[125px} w-[250px] rounded-xl"></Skeleton>
                <div className="space-y-2">
                    <Skeleton className="w-[250px] h-4"></Skeleton>
                    <Skeleton className="w-[250px] h-4"></Skeleton> 
                </div>
            </div>
        ))
    );
}

export default skeletonSchema;