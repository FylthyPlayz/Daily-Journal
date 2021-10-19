import { journalForm } from "./JournalForm.js"
import { Entries } from "./Entries.js"

export const DailyJournal = () => {
    return `
    <article class="entryForm">
        ${journalForm()}
    </article>
    <div class="entryList">
        ${Entries()}
    </div>
    
    `
}