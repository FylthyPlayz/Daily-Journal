import { getJournalEntries } from "./database.js"

export const Entries = () => {
    const entries = getJournalEntries()
    let allEntriesAsHTML = ""


    for (const entry of entries) {
        allEntriesAsHTML += `
           <h2> ${entry.concept} </h2>
           <p> ${entry.entry}</p>
        `
    }

    return allEntriesAsHTML
}