import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const completeFocusSession = async (req, res) => {
  try {
    const { userId, studyTime } = req.body;

    // 기본 포인트 (집중 성공 시)
    let points = 3;

    // 공부시간이 10분을 초과하는 경우 추가 포인트 계산
    if (studyTime > 10) {
      points += Math.floor(studyTime / 10);
    }

    // 사용자 포인트 업데이트
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        points: {
          increment: points,
        },
      },
    });

    res.status(200).json({ message: '포인트가 성공적으로 업데이트되었습니다.', points: updatedUser.points });
  } catch (error) {
    console.error('포인트 업데이트 실패:', error);
    res.status(500).json({ error: '포인트 업데이트에 실패했습니다.' });
  }
};

