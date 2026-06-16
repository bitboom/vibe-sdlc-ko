# Vibe Coding 시대의 새로운 SDLC

> Kaggle 화이트페이퍼 **The New SDLC With Vibe Coding**을 한국어 독자를 위해 구조화한 문서형 읽기 가이드입니다.

- **웹사이트:** https://bitboom.github.io/vibe-sdlc-ko/
- **원문:** https://www.kaggle.com/whitepaper-the-new-SDLC-with-vibe-coding

## 이 프로젝트는 무엇인가요?

이 저장소는 AI 코딩 에이전트와 바이브 코딩이 소프트웨어 개발 생명주기(SDLC)를 어떻게 바꾸는지 설명하는 공개 한국어 가이드입니다.

원문 전체 PDF를 재배포하지 않고, 핵심 개념을 한국어 기술 문서 톤으로 정리합니다. 단순 번역보다 다음에 초점을 둡니다.

- 원문의 핵심 주장과 용어를 보존합니다.
- 한국어 독자가 빠르게 이해할 수 있도록 구조화합니다.
- 개발자와 엔지니어링 리더가 실무 관점에서 읽을 수 있게 설명합니다.
- 원문 링크와 저작권 고지를 유지합니다.

## 다루는 주제

- **Vibe Coding vs Agentic Engineering**
  빠른 실험을 위한 바이브 코딩과, 운영 품질을 위한 에이전틱 엔지니어링의 차이

- **Context Engineering**
  instructions, knowledge, memory, examples, tools, guardrails와 static/dynamic context 설계

- **새로운 SDLC**
  요구사항, 설계, 구현, 테스트/QA, 리뷰/배포, 유지보수 단계에서 AI agent가 들어오는 방식

- **Harness Engineering**
  `Agent = Model + Harness` 관점에서 tools, sandbox, orchestration, hooks, observability를 설계하는 방법

- **Evaluation**
  tests와 evals의 차이, output evaluation과 trajectory evaluation, production agent 평가 기준

- **개발자의 역할 변화**
  Conductor와 Orchestrator, The 80% Problem, 명세 작성·작업 분해·결과 평가의 중요성

- **AI 개발의 경제학**
  TCO, CapEx/OpEx, token burn rate, maintenance tax, security remediation, model routing

- **시작 가이드와 용어집**
  개인 개발자, 팀 리더, 조직이 어디서 시작할지와 주요 원문 용어 병기

## 사이트 구성

이 프로젝트는 빌드 과정이 없는 정적 GitHub Pages 사이트입니다.

```text
index.html          # 본문 문서
styles.css          # 문서형 레이아웃/반응형 스타일
script.js           # 읽기 진행률, 현재 목차 표시, 모바일 목차 drawer
assets/og-image.png # 링크 공유용 Open Graph 이미지
assets/favicon.svg  # favicon
.nojekyll           # GitHub Pages 정적 제공 설정
```

## 로컬에서 보기

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 열면 됩니다.

## 배포

GitHub Pages에서 `main` 브랜치의 repository root를 그대로 배포합니다.

배포 URL: https://bitboom.github.io/vibe-sdlc-ko/

## 저작권과 출처

이 프로젝트는 원문 화이트페이퍼의 한국어 읽기 가이드입니다. 원문 저작권은 원저자와 게시처에 있습니다.

PDF 파일은 이 저장소에 포함하지 않으며, 원문은 Kaggle 링크로 연결합니다.
