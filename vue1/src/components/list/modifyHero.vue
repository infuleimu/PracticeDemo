<template>
  <Layout :style="{padding: '0 24px 24px'}">
    <Row>
      <Col span="24">
        <h3 style="margin-top: 8px;margin-bottom: 8px">修改英雄</h3>
      </Col>
    </Row>
    <Content :style="{padding: '24px', Height: '100%', background: '#fff'}">
      <Form v-model="formdata" label-position="top">
        <FormItem label="名称">
          <Input v-model="formdata.name" placeholder="请输入名称" />
        </FormItem>
        <FormItem label="性别">
          <Input v-model="formdata.sex" placeholder="请输入性别" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="modifyHeroById()">提交</Button>
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
    this.getHeroById()
  },
  methods: {
    getHeroById () {
      this.axios.get(`hero/` + this.$route.params.id)
        .then((res) => {
          this.formdata = res.data
        })
    },
    modifyHeroById () {
      this.axios.put(`hero/` + this.$route.params.id, this.formdata)
        .then((res) => {
          this.$router.push({ name: 'heroes' })
        })
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
//input v-model="数据"
//数据 axios.get(url+ID)
//ID 来源于list.vue
//js 中调用数据的方式为 this.$route.params.id