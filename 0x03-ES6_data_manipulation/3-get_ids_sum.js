export default function getStudentIdsSum(obj) {
    if (!(obj instanceof Array)) {
        return 0;
    }
    return obj.reduce((acc, item) => acc + item.id, 0);
}
