import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data/participants.json');

export async function GET() {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    const participants = JSON.parse(data);
    return NextResponse.json(participants);
  } catch (error) {
    console.error('Error reading participants data:', error);
    return NextResponse.json({ error: 'Failed to fetch participants' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    const participants = JSON.parse(data);

    if (participants.length >= 8) {
      return NextResponse.json({ error: 'Registration is full. Maximum 8 participants allowed.' }, { status: 400 });
    }

    const body = await request.json();
    const newParticipant = {
      id: Date.now().toString(),
      name: body.name,
      origin: body.origin,
      experience: body.experience,
      appIdea: body.appIdea,
      createdAt: new Date().toISOString(),
    };

    participants.push(newParticipant);
    await fs.writeFile(dataFilePath, JSON.stringify(participants, null, 2), 'utf8');

    return NextResponse.json({ success: true, participant: newParticipant });
  } catch (error) {
    console.error('Error saving participant:', error);
    return NextResponse.json({ error: 'Failed to register participant' }, { status: 500 });
  }
}
