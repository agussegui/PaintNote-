"use client"

import { useOthers, useSelf } from "@/liveblocks.config"
import { UserAvatar } from "./user-avatar"
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_USERS = 1;
 
export const Participants = () => {
    const users = useOthers();
    const currentUser = useSelf();
    const hasMoreUsers = users.length > MAX_SHOWN_USERS;
    
    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 items-center flex shadow-md">
            <div className="gap-x-2 flex">
                {users.slice(0, MAX_SHOWN_USERS).map(({connectionId, info}) => {
                    return (
                        <UserAvatar 
                            borderColor={connectionIdToColor(connectionId)}
                            key={connectionId}
                            src={info?.picture}
                            name={info?.name}
                            fallback={info?.name?.[0] || "T"}
                        />
                    )
                })}
                {currentUser && (
                    <UserAvatar 
                        borderColor={connectionIdToColor(currentUser.connectionId)}
                        src={currentUser.info?.picture}
                        name={`${currentUser.info?.name}(You)`}
                        fallback={currentUser.info?.name?.[0]}
                    />
                )}

                {hasMoreUsers && (
                    <UserAvatar
                        name={`${users.length - MAX_SHOWN_USERS} more`}
                        fallback={`+${users.length - MAX_SHOWN_USERS}`}
                    />
                )}
            </div>
        </div>
    )
}

export const ParticipantsSkeleton = () => {
    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 items-center flex shadow-md w-[100px]">
        </div>
    )
}