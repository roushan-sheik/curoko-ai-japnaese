const FunctionalRequirementsTable: React.FC = () => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300 min-w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-2 text-left min-w-32">
            機能名
          </th>
          <th className="border border-gray-300 p-2 text-left min-w-20">
            優先度
          </th>
          <th className="border border-gray-300 p-2 text-left min-w-48">
            概要
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-2">ユーザーログイン</td>
          <td className="border border-gray-300 p-2">高</td>
          <td className="border border-gray-300 p-2">ユーザー認証機能</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">顧客情報管理</td>
          <td className="border border-gray-300 p-2">高</td>
          <td className="border border-gray-300 p-2">
            顧客データの登録・更新・削除
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
export default FunctionalRequirementsTable;
