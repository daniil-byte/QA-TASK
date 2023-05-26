const Page = require('./page');

class Search extends Page {
  get searchForm() { return $('.search-form.user-search-form.with-options'); }
  get DeleteCoupon() { return $('app-client-total-delete-got-coupon'); }
  get option5001() { return $('/html/body/app-root/app-clients/header/aside/div[1]/app-client-total-delete-got-coupon/div/div[2]/div[6]'); }

  

  async performDeleteCoupon() {
    await this.searchForm.click();
    await this.spentDeleteCoupon.waitForDisplayed({ timeout: 5000 });
    await this.spentDeleteCoupon.click();
    await this.option5001.waitForDisplayed({ timeout: 5000 });
    await this.option5001.click();
    await browser.pause(10000);
  }
}

module.exports = new Search();