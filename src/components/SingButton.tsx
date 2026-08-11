import { authClient } from "@/lib/auth-client"
import { Button } from "./ui/button"
import { Link } from "@tanstack/react-router"



export function SingButton() {
    const session =  authClient.useSession()
    return (
        <>
        {
        session.data?.user ?
            <Button onClick={() => authClient.signOut()}>
                Se deconnecter
            </Button> 
        : 
        <Link to="/tranokala/singin">
            <Button>Se connecter</Button>
        </Link>
        }
        </>
    )

}