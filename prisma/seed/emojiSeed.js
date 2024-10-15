import { PrismaClient } from '@prisma/client';
import { EMOJI_DATA } from '../mock/emojiMock.js';  // 이모지 목데이터를 임포트

const prisma = new PrismaClient();

export async function seedEmoji() {
  try {
    await prisma.emoji.deleteMany();
    console.log('All existing emojis deleted.');

    await prisma.emoji.createMany({
      data: EMOJI_DATA.map((emojiData) => ({
        id: emojiData.id,
        emoji: emojiData.emoji,
        studyId: emojiData.studyId,
      })),
      skipDuplicates: true,
    });
    console.log('Emojis seeded successfully.');
  } catch (error) {
    console.error('Error seeding emojis:', error);
  } finally {
    await prisma.$disconnect();
  }
}