<template>
  <Layout :style="{padding: '0 24px 24px'}">
    <Row>
      <Col span="24">
        <h3 style="margin-top: 8px;margin-bottom: 8px">英雄列表</h3>
      </Col>
    </Row>
    <Content :style="{padding: '24px', Height: '100%', background: '#fff'}">
      <Row>
        <Button type="primary" @click="addHero()">添加</Button>
      </Row>
      <br />
      <Row>
        <Table height="auto" :columns="columns1" :data="list">
          <template slot-scope="{ row, index }" slot="action">
            <Button
              type="primary"
              size="small"
              style="margin-right: 5px"
              @click="modifyHero(row.id)"
            >编辑</Button>
            <Button type="primary" size="small" @click="deleteHero(row.id)">删除</Button>
          </template>
        </Table>
      </Row>
    </Content>
  </Layout>
</template>

<script>

export default {
  data () {
    return {
      columns1: [
        {
          title: '序号',
          key: 'id'
        },
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '操作',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      list: [],
    }
  },
  mounted () {
    this.getHeroList()
  },
  methods: {
    addHero () {
      this.$router.push({ name: 'addHero' })
    },
    getHeroList () {
      this.axios.get('hero')
        .then((res) => {
          const { status, data } = res
          if (status === 200) {
            this.list = data
          }
        })
    },
    deleteHero (id) {
      if (confirm('确定要删除吗？')) {
        this.axios.delete('hero/' + id)
          .then((res) => {
            //更新视图
            this.getHeroList()
          })
      }
    },
    modifyHero (id) {
      this.$router.push({ name: 'modifyHero', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
//A组件 数据ID
//edit btn->(ID)->js代码位置
//this.$router.push({params:{id:ID}})

//B组件 使用数据
//ID
//视图{{$route.params.id}}
//js this.$route.params.id