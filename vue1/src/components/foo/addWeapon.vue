<template>
  <Layout :style="{padding: '0 24px 24px'}">
    <Row>
      <Col span="24">
        <h3 style="margin-top: 8px;margin-bottom: 8px">添加武器</h3>
      </Col>
    </Row>
    <Content :style="{padding: '24px', Height: '100%', background: '#fff'}">
      <Form v-model="formdata" label-position="top">
        <FormItem label="名称">
          <Input v-model="formdata.name" placeholder="请输入名称" />
        </FormItem>
        <FormItem label="伤害">
          <Input v-model="formdata.demage" placeholder="请输入伤害" type="number" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="submitWeaponInfo">提交</Button>
        </FormItem>
      </Form>
    </Content>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      formdata: {
        name: '',
        demage: ''
      }
    }
  },
  methods: {
    //添加-处理表单提交
    submitWeaponInfo () {
      //1.互殴表单数据
      //2,axio.post
      //3.回到list组件
      this.axios.post(`weapon`, this.formdata)
        .then((res) => {
          if (res.status === 201) {
            this.$router.push({ name: 'foo' })
          }
        })
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
