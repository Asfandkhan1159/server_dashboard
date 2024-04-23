from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException, WebDriverException
import random
import spacy

def scrape_opentable_reviews(url):
    # Load the spaCy pre-trained model
    nlp = spacy.load("en_core_web_md")

    # Setup Selenium WebDriver with headers
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36")
    chrome_service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=chrome_service, options=chrome_options)
    driver.get(url)
    
    # Give the page time to load
    time.sleep(random.randint(5, 10))
    
    page_num = 1
    while True:
        try:
            # Scroll to the bottom of the page to load all reviews
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(random.randint(3, 5))
            
            # Find the reviews section
            reviews = driver.find_elements(By.CSS_SELECTOR, 'li[data-test="reviews-list-item"]')
            
            for review in reviews:
                # Extract the review text
                review_text = review.find_element(By.CSS_SELECTOR, 'span.l9bbXUdC9v0-').text
                
                # Use spaCy to check if the review contains a name
                doc = nlp(review_text)
                if any(token.ent_type_ == "PERSON" for token in doc):
                    # Extract the ratings
                    ratings = review.find_element(By.XPATH, './/ol[@class="gUG3MNkU6Hc- ciu9fF9m-z0-"]')
                    overall_rating = ratings.find_element(By.XPATH, './li[contains(text(), "Overall")]/span').text
                    food_rating = ratings.find_element(By.XPATH, './li[contains(text(), "Food")]/span').text
                    service_rating = ratings.find_element(By.XPATH, './li[contains(text(), "Service")]/span').text
                    ambiance_rating = ratings.find_element(By.XPATH, './li[contains(text(), "Ambience")]/span').text
                    
                    print(f'Review: {review_text}\nOverall Rating: {overall_rating}\nFood Rating: {food_rating}\nService Rating: {service_rating}\nAmbiance Rating: {ambiance_rating}\n')
                
                # Add a random delay between each review extraction
                time.sleep(random.randint(1, 3))
            
            # Check if there is a next page
            next_page_url = f"{url}?page={page_num + 1}"
            driver.get(next_page_url)
            time.sleep(random.randint(5, 10))
            
            # Check if the next page exists
            if "Page not found" in driver.page_source:
                break
            
            page_num += 1
        except WebDriverException as e:
            print(f"WebDriverException occurred: {str(e)}")
            break
    
    driver.quit()

def scrape_tripadvisor_reviews(url):
    # Load the spaCy pre-trained model
    nlp = spacy.load("en_core_web_md")

    # Setup Selenium WebDriver with headers
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36")
    chrome_service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=chrome_service, options=chrome_options)
    driver.get(url)
    
    # Give the page time to load
    time.sleep(random.randint(5, 10))
    
    page_num = 1
    while True:
        try:
            # Scroll to the bottom of the page to load all reviews
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(random.randint(3, 5))
            
            # Find the reviews section
            reviews = driver.find_elements(By.CSS_SELECTOR, 'div.review-container')
            
            for review in reviews:
                # Extract the review text
                review_text = review.find_element(By.CSS_SELECTOR, 'q.review-text').text
                
                # Use spaCy to check if the review contains a name
                doc = nlp(review_text)
                if any(token.ent_type_ == "PERSON" for token in doc):
                    # Extract the overall rating
                    overall_rating = review.find_element(By.CSS_SELECTOR, 'span.ui_bubble_rating').get_attribute('class').split('_')[-1]
                    
                    print(f'Review: {review_text}\nOverall Rating: {overall_rating}\n')
                
                # Add a random delay between each review extraction
                time.sleep(random.randint(1, 3))
            
            # Check if there is a next page
            try:
                next_button = driver.find_element(By.CSS_SELECTOR, 'a.next')
                next_button.click()
                time.sleep(random.randint(5, 10))
                page_num += 1
            except NoSuchElementException:
                break
        except WebDriverException as e:
            print(f"WebDriverException occurred: {str(e)}")
            break
    
    driver.quit()

# Example URLs
opentable_url = 'https://www.opentable.com/r/the-grove-delray-beach'
tripadvisor_url = 'https://www.tripadvisor.com/Restaurant_Review-g34227-d7001309-Reviews-The_Grove-Fort_Lauderdale_Broward_County_Florida.html'

# Scrape reviews from OpenTable
print("Scraping reviews from OpenTable...")
scrape_opentable_reviews(opentable_url)

# Scrape reviews from TripAdvisor
print("Scraping reviews from TripAdvisor...")
scrape_tripadvisor_reviews(tripadvisor_url)
