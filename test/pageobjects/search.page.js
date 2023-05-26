const Page = require('./page');

class DeleteCouponPage extends Page {
  get searchForm() { return $('.search-form.user-search-form.with-options'); }
  get spentDeleteCoupon() { return $('app-client-total-delete-spent-coupon'); }
  get option5001() { return $('/html/body/app-root/app-clients/header/aside/div[1]/app-client-total-delete-spent-coupon/div/div[2]/div[3]'); }

  

  async performSpentDeleteCoupon() {
    await this.searchForm.click();
    await this.spentDeleteCoupon.waitForDisplayed({ timeout: 5000 });
    await this.spentDeleteCoupon.click();
    await this.option5001.waitForDisplayed({ timeout: 5000 });
    await this.option5001.click();
    await browser.pause(10000);
  }
}

module.exports = new SearchFormPage();