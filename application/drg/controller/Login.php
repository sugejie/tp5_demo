<?php
namespace app\drg\controller;

use think\Controller;
use think\Session;
use think\Cookie;

class Login extends Controller
{
    /**
     * 初始化控制器,方法调用前执行
     */
    public function _initialize() {
        // 初始化cookie
        cookie(['prefix'=>'drgs_', 'expire'=>60]);
    }

    /**
     * 1.GET  跳转至登录页面
     * 2.POST 请求登陆验证
     */
    public function index() {
        if(Session::has('user')) {
            $this->redirect('Index/index');
        }
        if (request()->isPost())
        {
            $user = [
                'cuser'  => input('cuser'),
                'password'  => input('password'),
                'remeberMe' => input('remeberMe'),
            ];
            $res = \think\Db::query('{call DRG_UserGet(?, ?)}', [$user['cuser'], $user['password']]);
            $arr = explode('$', $res[0]['']);
            if (empty($arr[0])) {
                cookie('user', null);
                $this->assign('msg', '登录名或密码错误!');
            } else {
                Session::set('user', $this->initUserInfo($arr));
                if (empty(input('remeberMe'))) {
                    cookie('user', null);
                } else {
                    cookie('user', $user, 604800);//cookie有效期一周
                }
                $this->redirect('Index/index');
                // return $this->success('登陆成功！正在跳转...', 'Index/index', 3);
            }
        } else {
            $user = cookie('user');
        }
        $this->assign('user', $user);
        return view('login');
    }

    /**
     * 退出登陆
     */
    public function logout() {
        Session::clear();
        $this->redirect('Login/index');
    }

    /**
     * 初始化用户信息
     * @param  array $arr [description]
     * @return array      [description]
     */
    public function initUserInfo($arr) {
        return [
            'cusername' => $arr[0],
            'tabs'      => $arr[1],
            'chis_code' => $arr[2],
            'cbfmc'     => $arr[3],
            'cyblb'     => $arr[4]
        ];
    }
}