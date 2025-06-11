import axios from 'axios'

const API_URL = "https://ikcafzzxjainfktouizl.supabase.co/rest/v1/note"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrY2Fmenp4amFpbmZrdG91aXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQ1OTUsImV4cCI6MjA2NTE5MDU5NX0.afXwzQ5gFat4uhsuTiY99uW_sjQ7n6vhr8ptcH-xKW4"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteNote(id) {
        const response = await axios.delete(`${API_URL}?id=eq.${id}`, {
            headers,
        })
        return response.data
    }
}