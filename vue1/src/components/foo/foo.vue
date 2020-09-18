<template>
  <Layout :style="{padding: '0 24px 24px'}">
    <Row>
      <Col span="24">
        <h3 style="margin-top: 8px;margin-bottom: 8px">武器列表</h3>
      </Col>
    </Row>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      <Row>
        <Button type="primary" @click="addWeapon()">添加</Button>
      </Row>
      <br />
      <Table :columns="tableData" :data="weaponList">
        <template slot-scope="{ row, index }" slot="action">
          <Button
            type="primary"
            size="small"
            style="margin-right: 5px"
            @click="modifyWeapon(row.id)"
          >编辑</Button>
          <Button type="primary" size="small" @click="deleteWeapon(row.id)">删除</Button>
        </template>
      </Table>
    </Content>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          title: '序号',
          key: 'id'
        },
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '攻击力',
          key: 'demage'
        },
        {
          title: '操作',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      weaponList: []
    }
  },
  mounted () {
    this.getWeaponList()
  },
  methods: {
    getWeaponList () {
      this.axios.get('weapon')
        .then((resp) => {
          const { status, data } = resp
          // console.log(resp.data, resp.status);
          if (status === 200) {
            this.weaponList = data
          }
        })
    },
    deleteWeapon (id) {
      if (confirm('确定要删除吗？')) {
        this.axios.delete('weapon/' + id)
          .then((resp) => {
            this.getWeaponList()
          })
      }
    },
    modifyWeapon (id) {
      this.$router.push({ name: 'modifyWeapon', params: { id: id } })
    },
    addWeapon () {
      this.$router.push({ name: 'addWeapon' })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>