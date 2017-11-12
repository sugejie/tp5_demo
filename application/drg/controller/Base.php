<?php
namespace app\drg\controller;

use think\Controller;
use think\Session;

/**
 * 基类
 * 作用
 *     1._initialize检查登陆状态
 *     2.定义“全局”方法
 */
class Base extends Controller
{
    /**
     * 调用方法前执行检查session登陆状态,未登录-->登录页
     * @return [type] [description]
     */
    public function _initialize() {
        if(!Session::has('user')) {
            $this->redirect('Login/index', '请先登录后操作');
        }
    }

    /**
     * 调用存储过程dbo.DRG_query查询
     * @param  [type] $tableID   表名,w0,w1,w2等
     * @param  [type] $chis_code 单位编码
     * @param  [type] $cbfmc     岗位名称
     * @param  [type] $yblb      医保类别0~3
     * @return [type]            返回表单数据
     */
    public function query($tableID, $chis_code='', $cbfmc='', $yblb='') {
        return \think\Db::query('{call DRG_query(?, ?, ?, ?)}', [$tableID, $chis_code, $cbfmc, $yblb]);
    }
}