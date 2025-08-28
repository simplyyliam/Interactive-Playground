//Import both the Meta data of the component + the import for the component itsefl with a curstom name instead of Demo

import { meta as AvatarGroupMeta } from "@/components/avatar-group/meta"
import AvatarGroupDemo from "@/components/avatar-group/Demo"
import { meta as ImageSpotlight } from "@/components/image-spotlight/meta"
import ImageSpotlightDemo from "@/components/image-spotlight/Demo"


export const experiments = [
    {...AvatarGroupMeta, component: AvatarGroupDemo},
    {...ImageSpotlight, component: ImageSpotlightDemo}
]