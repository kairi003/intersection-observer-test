from playwright.sync_api import Page, expect

def test_intersection_observer(page: Page):
    page.goto("https://kairi003.github.io/intersection-observer-test/")
    expect(page.get_by_test_id("target-visible")).to_be_visible()
