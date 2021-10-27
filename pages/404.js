import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NoCheeseHere = () => {
    //inialize hook and store hook inside variable
    const router = useRouter();

    //when 404 page loads (useEffect), redirect to home after 3 sec (setTimeout)
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    })

    return ( 
        <main className="not-found">
            <h1>Sorry, no cheese here fam.</h1>
            <h5>Page cannot be found.</h5>
            <p>Go back to the <Link href="/"><a>home page</a></Link></p>
        </main>
     );
}
 
export default NoCheeseHere;