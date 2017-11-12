<?php
namespace app\admin\controller;

use think\Controller;

class Upload extends Controller
{
    public function upload()
    {
        if (request()->isPost()) {
            $file = request()->file('file');
            if ($file) {
                $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
                if ($info) {
                    // 输出 jpg
                    echo $info->getExtension() . '<br>';
                    // 输出 20171024\xxx.jpg
                    echo $info->getSaveName() . '<br>';
                    // 输出 xxx.jpg
                    echo $info->getFilename(); 
                } else {
                    $file->getError();
                }
            }
        }
        return view();
    }
}