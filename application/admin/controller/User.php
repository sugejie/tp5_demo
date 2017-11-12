<?php
namespace app\admin\controller;

use think\Controller;
use app\admin\model\User as Users;

class User extends Controller
{
    /**
     * 列表
     */
    public function lst()
    {
        //普通查询、分页查询
        // $userlist = \think\Db::name('user')->select();
        $userlist = \think\Db::name('user')->paginate(10);
        // 模型查询如下:
        // $userlist = Users::where('type', 0)-paginate(10);
        $this->assign('userlist', $userlist);
        return view();
    }

    /**
     * 自定义添加/修改方法
     */
    public function add2()
    {
        //表单提交
        if (request()->isPost()) {
            $user = [
                'username' => input('username'),
                'password' => input('password'),
                'type' => input('type')
            ];
            //验证器
            $validate = \think\Loader::validate('User');
            if (!$validate->check($user)) {
                $this->assign('user', $user);
                $this->assign('msg', $validate->getError());
            } else {
                if (empty(input('id'))) {
                    $res = \think\Db::name('user')->insert($user);
                } else {
                    $res = \think\Db::name('user')
                        ->where('id', input('id'))
                        ->update($user);
                }
                if ($res) {
                    $this->success('提交成功!', 'lst');
                } else {
                    $this->error('操作失败!');
                }
            }
        }
        //添加、修改操作;跳转->add.html
        $id = request()->param('id');
        if (!empty($id)) {
            $user = \think\Db::name('user')
                ->where('id', $id)
                ->select()[0];
            $this->assign('user', $user);
        }
        return $this->fetch('add');
    }

    /**
     * 使用模型操作User数据
     */
    public function add()
    {
        //表单提交
        if (request()->isPost()) {
            $user = new Users;
            $user->data([
                'username' => input('username'),
                'password' => input('password'),
                'type'     => input('type'),
                ]);
            //验证器
            $validate = \think\Loader::validate('User');
            if (!$validate->check($user)) {
                $this->assign('user', $user);
                $this->assign('msg', $validate->getError());
            } else {
                $res = $user->save();
                if ($res) {
                    $this->success('提交成功!', 'lst');
                } else {
                    $this->error('操作失败!');
                }
            }
        }
        //跳转->add.html
        $id = request()->param('id');
        if (!empty($id)) {
            $user = Users::get(['id'=>$id]);
            $this->assign('user', $user);
        }
        return $this->fetch('add');
    }

    public function del()
    {
        // 模型法删除
        // 方法一 $user = User::get(1);$user->delete();
        // 方法二 User::destroy(['id'=>input('id')]);
        // 方法三 User::where('id','>',10)->delete();
        $id = input('id');
        \think\Db::name('user')->delete($id);
        $this->redirect('lst');
    }
}