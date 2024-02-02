import { req } from "@/api/axios";
import { Event } from "@/types/event";
import { SearchResult } from "@/types/searchResult";

export const getEvent = async (id: number): Promise<Event | false> => {
    const json = await req.get(`/events/${id}`);
    return json.data.event as Event ?? false;
}

export const searchDoc = async (eventId: number, document: string): Promise<SearchResult | false> => {
    const json = await req.get(`/events/${eventId}/search?cpf=${document}`);

    if (json.data.person && json.data.personMatched) {
        return json.data;
    }

    return false;
}