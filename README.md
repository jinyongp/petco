<h1 style="text-align:left;transform: translateY(-20px);">펫코 <span style="font-size: 15px; color: #333;">: 동물병원 진료비 견적 서비스</span></h1>

<div align=center>

  <p align=center>
    <img width="200" src="./.github/assets/petco.svg" alt="petco-logo">
  </p>
  <p style="color: #333;" align=center>
    생각보다 높은 반려동물 진료비에 당황하신 적이 있나요? <br>
    펫코는 동물 병원에 방문하기 전 <span style="">쉽고 빠르게</span> <br>
    진료비를 견적 받을 수 있도록 도와줍니다. <br><br>
    빠르게 알고가는 동물병원 진료비 견적 서비스, <span style="color: #3f3f3f;"><b>펫코</b></span>.
  </p>

</div>

## 🐈 Introduction

### Screens

동작 과정을 gif 파일로 보여줌


## 👨🏻‍💻 Development

### Details

- [Frontend/Mobile README](./frontend/mobile/README.md)
- [Frontend/Web README](./frontend/web/README.md)
- [Backend README](./backend/README.md)

### Team Conventions and Standards

#### Workflow

- [Upstream 저장소](`https://github.com/jinyongp/petco`)로부터 `fork`한다. (`develop` branch인지 확인한다.)
- `fork`한 저장소를 `local`로 `clone`한다.
- `branch`를 생성한 후, 작업을 한다. (upstream으로부터 자주 pull을 받는다.)
- 작업을 마친 후, 변경사항을 pull request하여 모든 팀원에게 코드 리뷰를 받는다.
- 코드 리뷰에서 변경해야 할 사항을 변경하고 commit한다. (없으면 생략한다.)
- pull request를 `merge`하여 변경사항을 `develop` branch에 병합한다.

#### Coding Style

- 되도록 ES6+로 작성할 것
- Eslint 규칙 준수할 것

#### Git / Git Commit

- 이슈 발생 시, [Git 사용 중 자주 만나는 이슈 정리](https://parksb.github.io/article/28.html)를 참고할 것
- Commit message convention은 [좋은 git commit 메시지를 위한 영어 사전](https://blog.ull.im/engineering/2019/03/10/logs-on-git.html)를 참고할 것
- 하나의 작업 단위로 자주 commit할 것
- Commit message 혹은 pull request에 이슈 번호를 추가하여 연결한다. [Linking a pull request to an issue
 참고](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)

#### Git Branch

- branch naming convention은 `feature/{issue-number}-{feature-name}` 형식을 따를 것
- 접두어는 `feature`, `fix`, `refactor` 등 작업한 종류에 따라 작성할 것

[Git branch naming conventions 참고](https://deepsource.io/blog/git-branch-naming-conventions/)

```sh
$ git branch feature/12-navigating
```

>12는 issue tracker ID로 #12번 task를 명시한다.

#### Team Rules

- 모르는 것이 생기면 오랫동안 붙잡고 있지 말고 팀원과 상의할 것
- 참고한 reference를 각자 `README.md`에 추가할 것
- 코드 리뷰를 하며 작동 방식, 적절치 못한 부분에 관해 궁금한 점이 생긴다면 반드시 질문할 것
