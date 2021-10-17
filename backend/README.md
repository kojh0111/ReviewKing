# :crown: 리뷰왕 서버

<!-- <div><a href="http://sogang-sincheong.com/" target="_blank"> <img src="/Logo.png" alt="service-logo" width="200" height="200"/></a></div> -->

### 음식점 리뷰 비교 서비스 '리뷰왕'의 백엔드 서버 입니다.

네이버, 카카오의 음식점 평점이 매우 달라, 한 플랫폼만 참고해 음식점을 가면
예상과는 달리 매우 맛이 없고 서비스가 불만족 스러웠던 경험이 있었습니다.  
이에 불편함을 느껴 저희는,
**음식점 리뷰를 제공하는 플랫폼들의 리뷰들을 한 눈에 볼 수 있는 서비스**를
제공하고자 이 프로젝트를 시작하게 되었습니다.

**이 서비스는 SPA(Single Pange Application)입니다.**

# 🔧 Tech Stack

## Infra

<table><tbody>
 <tr>
  <td>
   <div align="center"><a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a></div>
  </td>
  <td>
   <div align="center"><a href="https://www.docker.com/" target="_blank"> <img src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png" alt="docker" width="40" height="40"/> </a></div>
  </td>
 </tr>
  <tr>
    <td align = "center">Git</td>
    <td align = "center">Docker</td>
  </tr>
</tbody></table>

## REST API

<table><tbody>
 <tr>
  <td width="75">
   <div align="center"><a href="https://www.python.org/" target="_blank"> <img src="https://www.python.org/static/community_logos/python-powered-h.svg" alt="Python" width="40" height="40"/> </a></div>
  </td>
  <td width="75">
   <div align="center"><a href="https://flask.palletsprojects.com/en/2.0.x/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" alt="Flask" width="40" height="40"/> </a></div>
  </td>
  <td width="75">
   <div align="center"><a href="https://www.linux.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" alt="linux" width="40" height="40"/> </a></div>
  </td>
  <td width="75">
   <div align="center"><a href="https://aws.amazon.com/ko/ec2/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg" alt="AWS EC2" width="40" height="40"/> </a></div>
  </td>
   <tr>
    <td align = "center">Python</td>
    <td align = "center">Flask</td>
     <td align = "center">Linux</td>
     <td align = "center">AWS EC2</td>
  </tr>
 </tr>
 </tbody></table>

### Database

<table><tbody>
 <tr>
  <td>
   <div align="center"><a href="https://www.mysql.com/" target="_blank"> <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="mysql" width="40" height="40"/> </a></div>
  </td>
  <td>
   <div align="center"><a href="https://aws.amazon.com/ko/rds/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/AWS_Simple_Icons_Database_Amazon_RDS.svg" alt="aws rds" width="40" height="40"/> </a></div>
  </td>
 </tr>
  <tr>
    <td align = "center">MySQL</td>
    <td align = "center">AWS RDS</td>
  </tr>
</tbody></table>

# 🔧 Proejct Setup / and Organization

## Project structure

```
.
├── Dockerfile
├── README.md
├── app
│   ├── apis
│   ├── app.py
│   ├── config.py
│   ├── entrypoint.sh
│   ├── migrations
│   └── models.py
└── requirements.txt
```

## Install required packages

사용한 패키지들 다운로드

```bash
pip install -r requirements.txt
```

## Build

```bash
# $(pwd) = project root directory
docker build -t yourdockerusername/dockerfilename .
```

## Run

```bash
docker run -dp 5000:5000 yourdockerusername/dockerfilename
```

# :books: API List

SPA의 특성에 맞게 전부 GET Method로 구성되어 있습니다.

## Reviews

- Restaurants All
- Restaurants Reviews

## Ranks

- Ranks Categories
- Ranks Result

## What-to-eat

- What-to-eat Subcategories
- What-to-eat Keywords
- What-to-eat Result
