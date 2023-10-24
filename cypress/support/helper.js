class commonHelper{

    static generateNowTime() {
      const today = new Date();
      return today.toLocaleDateString() + '_' + today.getTime();
    }

} export default new commonHelper();