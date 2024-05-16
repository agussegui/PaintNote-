
import { useOrganization } from "@clerk/nextjs"

import { api } from "@/convex/_generated/api"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export const EmptyBoards = () => {
    const router = useRouter();
    const {organization} = useOrganization()
    const {mutate, pending} = useApiMutation(api.board.create)

    const onClick = () =>{

        if(!organization) return; 

        mutate({
            orgId: organization.id,
            title: "Untitled"
        })
            .then((id) => {
                toast.success("Board Created")
                router.push(`/board/${id}`)
            })
            .catch(() => toast.error("Failed to create board"))
    };

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
                src="/note.png"
                height={300}
                width={300}
                alt="empty"
            />
            <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
            <p className="text-sm text-muted-foreground mt-4">Start by creating a board for your organization</p>
            <div className="mt-6">
                <Button disabled={pending} onClick={onClick} size="lg">
                    Create Board
                </Button>
            </div>
        </div>
    )
}