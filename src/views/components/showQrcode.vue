<!--
 * @Descripttion: 显示二维码,此页面接收两个参数 1. 图片路径(imgUrl)默认'www.baidu.com' 2.二维码上的参数(code) 默认''
 * @version: 
 * @Author: zml
 * @Date: 2020-04-11 10:04:28
 * @LastEditors: zml
 * @LastEditTime: 2020-04-11 15:31:16
 -->
<template>
  <div class="show">
    <van-button type="primary" @click="getQRCode">显示二维码</van-button>
		<!-- 显示二维码 -->
		<div style="text-align:center" v-if="dialogFormVisible">
			<canvas id="QRCode" style="text-align:center" />
		</div>
  </div>
</template>
<script>
import QRCode from 'qrcode' // 引入生成二维码插件
export default {
	name: 'Show',
	props: {
		imgUrl: {
			type: String,
			default: 'www.baidu.com'
		},
		code: {
			type: String,
			default: ''
		}
  },
	data() {
		return {
			dialogFormVisible: false,
			QRCodeMsg: '', // 生成二维码信息
		}
	},
	watch: {
		QRCodeMsg(val) {
			var thas = this
			setTimeout(() => {
				var msg = document.getElementById('QRCode')
        // 将获取到的数据（val）画到msg（canvas）上
        QRCode.toCanvas(msg, val, {
          width: 300 // 二维码宽度
        }, function() {
          var context = document.getElementById('QRCode').getContext('2d')
          // 设置字体
          context.font = '16px bold 黑体'
          // 设置颜色
          context.fillStyle = '#0061C0'
          // 设置水平对齐方式
          context.textAlign = 'center'
          // 设置垂直对齐方式
          context.textBaseline = 'middle'
          // 绘制文字（参数：要写的字，x坐标，y坐标）
					context.fillText(thas.code, 150, 290)
					// 二维码下载图片的格式
					// png为png格式  jpeg为jpeg格式
          // var url = context.canvas.toDataURL('image/png')
          // thas.downloadFile(thas.code, url)
        })
			}, 0);
		}
	},
	methods: {
		// 点击按钮生成二维码
		getQRCode() {
			this.dialogFormVisible = true
			this.QRCodeMsg = this.imgUrl
		},
		// 下载
		downloadFile(fileName, content) {
			const aLink = document.createElement('a')
			const blob = this.base64ToBlob(content) // new Blob([content]);

			const evt = document.createEvent('HTMLEvents')
			evt.initEvent('click', true, true)// initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
			aLink.download = fileName
			aLink.href = URL.createObjectURL(blob)

			// aLink.dispatchEvent(evt);
			aLink.click()
		},
		// base64转blob
		base64ToBlob(code) {
			const parts = code.split(';base64,')
			const contentType = parts[0].split(':')[1]
			const raw = window.atob(parts[1])
			const rawLength = raw.length

			const uInt8Array = new Uint8Array(rawLength)

			for (let i = 0; i < rawLength; ++i) {
				uInt8Array[i] = raw.charCodeAt(i)
			}
			return new Blob([uInt8Array], { type: contentType })
		},
	},
}
</script>