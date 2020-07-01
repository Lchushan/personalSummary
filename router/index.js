
//���캯��
function Router() {
  this.routes = {};
  this.currentUrl = '';
}
Router.prototype.route = function (path, callback) {
  this.routes[path] = callback || function () { };//����ͬ��hash���ò�ͬ�Ļص�����
};
Router.prototype.refresh = function () {
  // console.log(location.hash.slice(1));//��ȡ����Ӧ��hashֵ
  this.currentUrl = location.hash.slice(1) || '/';//�������hashֵ���ȡ������������hashֵΪ/
  // console.log(this.currentUrl);
  if (this.currentUrl && this.currentUrl != '/') {
    try {
      this.routes[this.currentUrl]()//���ݵ�ǰ��hashֵ���������Ӧ�Ļص�����
    } catch (err) { console.log(err) }
  }

};
Router.prototype.init = function () {
  window.addEventListener('load', this.refresh.bind(this), false);
  window.addEventListener('hashchange', this.refresh.bind(this), false);
}
//��window�����������
window.Router = new Router();

window.Router.init();