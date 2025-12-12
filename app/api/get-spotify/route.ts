import { NextResponse } from 'next/server';

const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const LASTFM_USERNAME = process.env.LASTFM_USERNAME;

export async function GET(request: Request) {
    try {
        console.log(LASTFM_API_KEY, LASTFM_USERNAME);
        const response = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json`
        );

        return response;
    } catch (err) {
        return NextResponse.json({ ok: false });
    }
}