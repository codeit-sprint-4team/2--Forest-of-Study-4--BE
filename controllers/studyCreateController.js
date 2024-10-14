import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getStudies = async (req, res) => {
  try {
    const studies = await prisma.study.findMany();
    res.status(200).json(studies);
  } catch (error) {
    console.error("스터디 목록 조회 실패:", error);
    res.status(500).json({ error: "스터디 목록 조회 중 오류가 발생했습니다." });
  }
};

export const createStudy = async (req, res) => {
  const { name, password, description, nickname, background } = req.body;

  if (!name || !password || !description || !nickname || !background) {
    return res.status(400).json({
      error: "스터디 이름, 비밀번호, 설명, 닉네임 및 배경은 필수입니다.",
    });
  }

  try {
    const newStudy = await prisma.study.create({
      data: {
        name,
        password,
        description,
        nickname,
        background,
        createdAt: new Date(),
      },
    });

    res.status(201).json(newStudy);
  } catch (error) {
    console.error("스터디 생성 실패:", error);
    res.status(500).json({ error: "스터디 생성 중 오류가 발생했습니다." });
  }
};

export const getStudyById = async (req, res) => {
  const { studyId } = req.params;

  try {
    const study = await prisma.study.findUnique({
      where: {
        id: studyId,
      },
    });

    if (!study) {
      return res.status(404).json({ error: "해당 스터디를 찾을 수 없습니다." });
    }

    res.status(200).json(study);
  } catch (error) {
    console.error("스터디 조회 실패:", error);
    res.status(500).json({ error: "스터디 조회 중 오류가 발생했습니다." });
  }
};
