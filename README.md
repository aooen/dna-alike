# dna-alike

https://user-images.githubusercontent.com/33291896/182380037-7cd124f8-839a-40ab-bdc7-e41eb2f75b87.mov

사내 Web art 스터디에서 작업한 작품입니다.

## 작품 설명

DNA의 이중 나선 구조를 보고서 약간은 엉성하게 연결되어있다는 느낌을 받았었다.

실제로 어떻게 움직이는지 궁금했고, 그를 나름대로 생각하여 추상적인 요소들로 만들면 어떨까 생각하게 되었다. 특히, 꿈에서 어떠한 음파와 같은 파동이 움직이는 것을 본 지 얼마 안되었을 때였기에 이런 작품을 생각하게 된 계기이다.

이 작품은 2D로 구성된다. DNA는 3차원에 존재하는 데 비해 너무 오만한 발상이라고 볼 수 있다. 그만큼 화자의 시선에서 볼때 나타나는 실제와의 괴리가 있을 수 있고, 착각을 만들어낼 수 있다. 이 부분에서 작가는 하나의 wave가 다른 wave와 교차하여 만들어내는 도형에 집중하여, 그 내부에 존재하는 선들을 그룹화하여 각각의 그룹에 대해 색깔을 부여했다. 이 색깔이 상단파와 하단파가 움직이면서 다른 도형으로 넘어가는 것을 보는 것도 재미 요소이다. 2D 상에서는 최초에 보았던 형태와 나중의 형태가 같이 보일수도 있는데, 3D상에서는 다르다는 것을 명확히 꼬집은 것이다.

## 코드 설명

y축 대칭인 두 sin파의 형태로 구성하였다. 각각의 x 값에 대해 y를 구해 점을 찍는다.

두 sin파에 대해 x를 $\pi / 0.03 / 4$ 씩 증가시키면서 joint를 만든다. 한 sin파의 n번째 joint와 다른 sin파의 n번째 joint를 연결시킨다.

둘 중의 하나의 sin파는 매 프레임마다 랜덤하게 0~3만큼 x를 이동한다. 하지만 둘의 간격이 3 이상 차이 나는 경우 무조건 다른 sin파와 가까워지는 방향으로 이동되어야 한다.
