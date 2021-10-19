export const journalForm = () => {
    return ` <form class="entryForm">
    <fieldset>
        <label for="entryDate">Date</label>
        <input type="date" name="entryDate" class="entryForm_date">
    </fieldset>
    <fieldset>
        <label for="dateOfEntry">Date of Entry</label>
        <input type="date" name="dateOfEntry" class="entryForm_date">
    </fieldset>
    <fieldset>
        <label for="conceptsCovered">Concepts Covered</label>
        <input type="concepts" name="conceptsCovered" class="entryForm_concept">
    </fieldset>
    <fieldset>
        <label for="journalEntry">Journal Entry</label>
        <input type="entry" name="journalEntry" class="entryForm_journal">
    </fieldset>
    <fieldset>
        <label for="moodForTheDay">Mood For The Day</label>
        <select type="mood" name="moodForTheDay" class="entryForm_mood">
            <option value="Fine">Fine</option>
            <option value="Sad">Sad</option>
            <option value="Happy">Happy</option>
            <option value="Angry">Angry</option>
            <option value="HulkSmash">Hulk Smash!</option>
        </select>
    </fieldset>
    <button type="button">Record Journal Entry!</button>
</form>`
   
}










