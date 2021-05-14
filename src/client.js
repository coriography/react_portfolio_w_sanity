// this file "talks to" Sanity studio.
// this is how our app knows what project to look at
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "5e46qv2t", // found in /studio/package.json OR Sanity dashboard > studio > PROJECT ID
    dataset: "production"
})