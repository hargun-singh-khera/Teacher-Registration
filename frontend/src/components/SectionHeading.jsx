import { capitalizeString } from "../lib/utils.js";

const SectionHeading = ({ title }) => {
    return <h3 className="text-lg py-4 pt-[30px]">{capitalizeString(title)}</h3>
}
export default SectionHeading