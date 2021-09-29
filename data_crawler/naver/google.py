import time
from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.common.keys import Keys


driver = webdriver.Chrome("./chromedriver")
driver.get(
    "https://www.google.com/maps/search/%EC%84%A0%EB%A6%89%EC%97%AD+%EC%9D%8C%EC%8B%9D%EC%A0%90"
)
time.sleep(2)

""" 첫 번째 가게 클릭"""
driver.find_element_by_xpath(
    '//*[@id="pane"]/div/div[1]/div/div/div[4]/div[1]/div[3]/div/a'
).click()

time.sleep(2)

# driver.find_element_by_xpath(
#     '//*[@id="sGi9mc-m5SR9c-bottom-pane"]/div/div[1]/div/div/div/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]'
# ).click()


soup = BeautifulSoup(driver.page_source, "lxml")

with open("map.html", "w", encoding="utf8") as f:
    f.write(driver.page_source)

stores = soup.find("div", attrs={"class": "xtu1r-K9a4Re-ibnC6b-haAclf"})

# .find_all(
#     "div", attrs={"class": "Ymd7jc jpDWw-HiaYvf"}
# )
print(stores)
for store in stores:
    name = store.find("span", attrs={"class": "GgK1If"}).get_text()
    print(name)
