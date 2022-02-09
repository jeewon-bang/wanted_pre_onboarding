## 📌 실행 방법

---

1. 해당 repository에서 코드 clone
2. 로컬 영역에서 아래 명령어 입력

   `git clone https://github.com/jeewon-bang/wanted_pre_onboarding.git`

3. 해당 디렉토리로 이동

   `cd wanted_pre_onboarding`

4. 필요한 라이브러리 설치

   `yarn install`

5. 3000포트로 실행

   `yarn run start`

## 🎁 구현 방법

---

### ✅ Toggle.js

- 구현 방법
  - isToggleOn상태 변수(`useState`)를 `boolean`값으로 만들어서 클릭 시마다 `true`↔️ `false`로 바뀌게 함 (toggleHandler 메서드)
- 어려웠던 점
  - 토글 버튼 배경에 색을 직선으로 채우는 UI구현이 어려웠음
    👉 background속성에서 linear-gradient를 사용함으로써 해결함

### ✅ Tab.js

- 구현 방법
  - tab 이름과 content 부분을 객체로 갖고 있는 menuArray배열과 현재 탭을 가리킬 수 있도록 currentTab을 `number`타입의 상태변수(`useState`)를 선언함
  - 앞서 선언한 menuArray배열을 `map`함수와 `li tag`를 사용하여 나타내줌
  - 탭 클릭시 `index`를 setCurrentTab에 넣어 현재 가리키고 있는 탭을 바꿔줌(selectTabHandler 메서드)

### ✅ Tag.js

- 구현 방법
  - `string`타입의 상태 변수 tags를 만듦(`useState`)
  - tag추가 시 이미 존재하는 태그일 경우나 값이 입력되지 않은 경우 추가를 막기 위해서 `if`문으로 필터링함
  - tag삭제 시 전달받은 `index`값은 제외하고 tags상태 변수에 남아있도록 `filter`함수를 사용

### ✅ ClickToEdit.js

- 구현 방법
  - 이름과 나이를 각각 name, age상태 변수로 만듦(`useState`)
  - 자식 컴포넌트(MyInput)에 newValue상태 변수를 만들고 값이 바뀔 때마다 해당 변수에 저장
  - isEditMode상태 변수를 통해 edit모드 활성화 시 `input`에 포커스 줌(`useEffect`)
  - `input`외 다른 부분 클릭 시(`onBlur`) edit모드를 비활성화로 만들고 새로 입력된 값(newValue)을 부모 컴포넌트의 상태 변수에 저장
- 어려웠던 점
  - input외 다른 부분 클릭시 이벤트주는 부분
    👉 onBlur이벤트 사용

### ✅ Modal.js

- 구현 방법
  - isModalOpen상태 변수를 만들어서 모달 오픈을 `boolean`으로 결정되게 함
  - openModalHandler메서드를 통해 `isModalOpen` 의 값이 `true`↔️ `false` 로 바뀌게 구현함
  - 모달 버튼에 열기 전에는 “Open Modal”을, 모달 연 후엔 “Opened!”가 보이도록 함
- 어려웠던 점
  - 띄워진 모달창 내부를 클릭해도 모달이 닫히는 문제
    👉 `event.stopPropagation()` 를 모달 뷰영역의 `onClick`으로 사용하여 자식 컴포넌트의 작동을 막음

### ✅ AutoComplete.js

- 구현 방법
  - 자동완성될 옵션들을 deselectedOptions로 지정함
  - `input`의 값의 유무를 확인하기 위해 hasText상태 변수 만듦
  - `input`의 값인 inputValue상태 변수
  - `input`에 입력된 값을 포함하는 옵션을 필터링하기 위한 options상태 변수를 만듦
  - `input`에 값이 변경될 때마다(`onChange`) inputValue에 값을 저장하고 hasText도 `true`로 변경함(handleInputChange 메서드)
  - `useEffect`를 사용해 inputValue가 변할 때만 입력된 값을 포함하는 옵션만 필터링(`filter`함수)해 options변수에 저장함
  - 드롭다운에서 필터링된 옵션들 중 하나를 선택(selected상태 변수)하면 해당 값이 inputValue에 저장되도록 함(handleDropDownClick메서드)
