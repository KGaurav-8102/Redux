
import { getUnresolvedBugs } from "../bugs";

describe("selectors", () => {
    it ("getUnresolvedBugs", () => {
        const result = getUnresolvedBugs({
            entities: {
                bugs: {
                    list: [
                        {id: 1, resolved: true},
                        {id: 2},
                        {id: 3}
                    ]
                }
            }
        });
        expect(result).toHaveLength(2);
    })
})  