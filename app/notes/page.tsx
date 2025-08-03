import { fetchNotes } from "../../lib/api";
import NotesClient from "./NotesHub";


export default async function Page() {
  const initialData = await fetchNotes(1, 12, "");

  return <NotesClient initialData={initialData} />;
}
