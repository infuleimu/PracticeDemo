<template>
  <Layout :style="{padding: '0 24px 24px'}">
    <Row>
      <Col span="24">
        <h3 style="margin-top: 8px;margin-bottom: 8px">修改武器</h3>
      </Col>
    </Row>
    <Content :style="{padding: '24px', Height: '100%', background: '#fff'}">
      <Form v-model="formdata" label-position="top">
        <FormItem label="名称">
          <Input v-model="formdata.name" placeholder="请输入名称" />
        </FormItem>
        <FormItem label="请输入伤害">
          <Input v-model="formdata.demage" placeholder="请输入伤害" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="submitHeroInfo">提交</Button>
        </FormItem>
      </Form>
    </Content>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      formdata: {}
    }
  },
  mounted () {
    this.getWeaponByID()
  },
  methods: {
    getWeaponByID () {
      this.axios.get(`weapon/` + this.$route.params.id)
        .then((resp) => {
          this.formdata = resp.data
          console.log(this.$route.params.id);
        })
    },
    //添加-处理表单提交
    submitHeroInfo () {
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
