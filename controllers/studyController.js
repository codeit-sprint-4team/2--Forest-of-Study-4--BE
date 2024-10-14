import prisma from "../utils"; // Prisma 인스턴스 가져오기"

// 스터디 수정 (PUT /api/studies/:studyId)
export const updateStudy = async (req, res) => {
  try {
    const { studyId } = req.params; // 경로 파라미터에서 studyId 추출
    const { name, password, point } = req.body; // 수정할 데이터

    const parsedStudyId = parseInt(studyId);
    if (isNaN(parsedStudyId)) {
      return res.status(400).json({
        message: "유효하지 않은 studyId입니다.",
      });
    }

    const updatedStudy = await prisma.study.update({
      where: { id: parsedStudyId },
      data: { 
        ...(name && { name }),
        ...(password && { password }),
        ...(point !== undefined && { point }),
      },
    });

    res.status(200).json({
      message: "스터디가 성공적으로 업데이트되었습니다.",
      data: updatedStudy,
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        message: "스터디를 찾을 수 없습니다.",
      });
    }
    res.status(500).json({
      message: "스터디 업데이트에 실패했습니다.",
      error: error.message,
    });
  }
};

// 스터디 삭제 (DELETE /api/studies/:studyId)
export const deleteStudy = async (req, res) => {
  try {
    const { studyId } = req.params; // 경로 파라미터에서 studyId 추출

    const parsedStudyId = parseInt(studyId);
    if (isNaN(parsedStudyId)) {
      return res.status(400).json({
        message: "유효하지 않은 studyId입니다.",
      });
    }

    await prisma.study.delete({
      where: { id: parsedStudyId },
    });

    res.status(200).json({
      message: "스터디가 성공적으로 삭제되었습니다.",
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        message: "스터디를 찾을 수 없습니다.",
      });
    }
    res.status(500).json({
      message: "스터디 삭제에 실패했습니다.",
      error: error.message,
    });
  }
};
