import { PrismaClient } from '@prisma/client';
import { mockEmojis } from './emojiMock.js';

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.emoji.deleteMany();
    console.log("All existing emojis deleted.");
    await prisma.emoji.createMany({
      data: mockEmojis.map((emojiData) => ({
        id: emojiData.id,
        emoji: emojiData.emoji,
        studyId: emojiData.study.id,
      })),
    });
    console.log("Emojis seeded successfully.");
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();